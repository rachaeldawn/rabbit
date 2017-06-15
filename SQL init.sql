DROP SCHEMA rabbitschema CASCADE;
-- SCHEMA: RabbitSchema

CREATE SCHEMA rabbitschema
    AUTHORIZATION "Developer";

GRANT ALL ON SCHEMA rabbitschema TO postgres;

GRANT ALL ON SCHEMA rabbitschema TO "Developer";

ALTER ROLE "Developer" SET search_path TO rabbitschema;
ALTER ROLE postgres SET search_path TO rabbitschema;
SET search_path TO rabbitschema;

CREATE TYPE transaction_method AS ENUM (
    'online', 
    'cheque', 
    'deposit', 
    'cash', 
    'credit'
);
CREATE TYPE payroll_entry_type as ENUM (
    'time-1.0', 
    'time-1.5',
    'time-2.0',
    'stat',
    'salary',
    'bonus', 
    'deduction',
    'vacation'
);
CREATE TYPE weekday AS enum (
    'sunday'
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday'
);

CREATE TABLE tag (
    id serial PRIMARY KEY,
    name varchar(140) NOT NULL,
    red SMALLINT NOT NULL,
    green SMALLINT NOT NULL,
    blue SMALLINT NOT NULL, 
    opacity SMALLINT NOT NULL,
    CHECK (red > -1 AND red < 256),
    CHECK (blue > -1 AND blue < 256),
    CHECK (green > -1 AND green < 256),
    CHECK (opacity > -1 AND opacity < 256)
);


CREATE TABLE user_account ( 
    id serial PRIMARY KEY, 
    username varchar(140) UNIQUE NOT NULL,
    is_active boolean NOT NULL DEFAULT TRUE
);
CREATE TABLE user_account_password (
    id integer PRIMARY KEY REFERENCES user_account(id) ON DELETE CASCADE,
    hash varchar NOT NULL,
    salt varchar NOT NULL,
    iterations integer NOT NULL
);
CREATE TABLE conversation (
    id serial PRIMARY KEY,
    creator_id integer references user_account(id) NOT NULL
);
CREATE TABLE conversation_participant (
    id serial PRIMARY KEY,
    user_id integer REFERENCES user_account(id) NOT NULL,
    conversation_id integer references conversation(id) NOT NULL
);
CREATE TABLE message (
    id serial PRIMARY KEY,
    conversation_id integer REFERENCES conversation(id) NOT NULL,
    sender_id integer REFERENCES user_account(id) NOT NULL,
    message varchar(2400)
);
CREATE TABLE message_receipt (
    message_id integer REFERENCES message(id) NOT NULL,
    recipient_id integer REFERENCES user_account(id) NOT NULL,
    received timestamp WITH TIME ZONE,
    read timestamp WITH TIME ZONE,
    PRIMARY KEY(message_id, recipient_id)
);
CREATE TABLE customer (
    id serial PRIMARY KEY,
    company_name varchar(240) NOT NULL,
    mailing_address varchar(200) NOT NULL,
    mailing_postal_code varchar(6) NOT NULL,
    mailing_country varchar(80) DEFAULT ('Canada') NOT NULL,
    physical_address varchar(200),
    physical_country varchar(80),
    physical_postal_code varchar(6),
    phone varchar(12) NOT NULL,
    start_date timestamp WITH TIME ZONE NOT NULL
);
CREATE TABLE customer_contact (
    id integer PRIMARY KEY REFERENCES user_account(id),
    first_name varchar(180) NOT NULL,
    last_name varchar(180) NOT NULL,
    phone varchar(12) NOT NULL,
    phone_extension varchar(10),
    about varchar(2000),
    is_deleted boolean DEFAULT FALSE
);
CREATE TABLE employee (
    id integer PRIMARY KEY REFERENCES user_account(id) ON DELETE CASCADE,
    first_name varchar(180) NOT NULL,
    middle_name varchar(180),
    last_name varchar(180) NOT NULL,
    phone varchar(12) NOT NULL,
    about varchar(2500),
    home_address varchar(75)NOT NULL,
    postal_code varchar(6) NOT NULL,
    sin varchar(9) NOT NULL,
    birthday date NOT NULL,
    is_active boolean NOT NULL
);
CREATE TABLE employment_period (
    id serial PRIMARY KEY,
    employee_id integer REFERENCES employee(id) NOT NULL,
    start_date date NOT NULL DEFAULT CURRENT_DATE,
    end_date date
);
CREATE TABLE employee_workday (
    id serial PRIMARY KEY,
    employee_id integer REFERENCES employee(id) NOT NULL,
    clock_in timestamp WITH TIME ZONE DEFAULT NOW() NOT NULL,
    clock_out timestamp WITH TIME ZONE 
);
-- Work journal is a written rubber duck debugging. Strongly encourage to use this, but not required.
CREATE TABLE journal (
    id serial PRIMARY KEY,
    employee_id integer REFERENCES employee(id) ON DELETE CASCADE NOT NULL,
    name varchar(120) NOT NULL
);
-- Tagging a workday means that the entry will be visible by management. 
CREATE TABLE journal_entry (
    id serial PRIMARY KEY,
    journal_id integer REFERENCES journal(id) ON DELETE CASCADE NOT NULL,
    message varchar(5000) NOT NULL,
    time_stamp timestamp WITH TIME ZONE  DEFAULT NOW() NOT NULL,
    -- OPTIONAL --
    workday_id integer REFERENCES employee_workday(id),
    CONSTRAINT message CHECK (char_length(message) > 15)
);
CREATE TABLE journal_entry_tag (
    id serial PRIMARY KEY,
    entry_id integer REFERENCES journal_entry(id) ON DELETE CASCADE NOT NULL,
    tag_id integer REFERENCES tag(id) NOT NULL
);
CREATE TABLE service (
    id serial PRIMARY KEY,
    name varchar(64) NOT NULL,
    description varchar(360),
    price money NOT NULL,
    default_quantity numeric(9, 2) NOT NULL,
    is_archived boolean DEFAULT FALSE
);
CREATE TABLE transaction (
    id serial PRIMARY KEY,
    amount money NOT NULL,
    method transaction_method NOT NULL,
    paid_on timestamp WITH TIME ZONE DEFAULT NULL
);
CREATE TABLE transaction_tag (
    id integer REFERENCES transaction(id) NOT NULL,
    tag_id integer REFERENCES tag(id) NOT NULL
);
CREATE TABLE transaction_adjustment (
    id integer PRIMARY KEY references transaction(id),
    original_transaction_id integer REFERENCES transaction(id) NOT NULL,
    memo varchar(400) NOT NULL
);
CREATE TABLE estimate (
    id serial PRIMARY KEY,
    customer_id integer REFERENCES customer(id),
    rep_id integer REFERENCES employee(id),
    open_date TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
    -- How many more days after opening is this valid?
    validity_period integer NOT NULL DEFAULT 14
);
CREATE TABLE estimate_item (
    id serial PRIMARY KEY,
    estimate_id integer REFERENCES estimate(id) ON DELETE CASCADE NOT NULL,
    service_id integer REFERENCES service(id) NOT NULL,
    quantity numeric(9, 2)
);
CREATE TABLE estimate_contact(
    id serial PRIMARY KEY,
    estimate_id integer REFERENCES estimate(id) ON DELETE CASCADE,
    contact_id integer REFERENCES customer_contact(id)
);
CREATE TABLE workorder (
    id serial PRIMARY KEY,
    customer_id integer REFERENCES customer(id),
    rep_id integer REFERENCES employee(id),
    open_date TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
    close_date TIMESTAMP WITH TIME ZONE
);

CREATE TABLE workorder_contact (
    id serial PRIMARY KEY,
    workorder_id integer REFERENCES workorder(id) ON DELETE CASCADE,
    contact_id integer REFERENCES customer_contact(id)
);
CREATE TABLE workorder_item (
    id serial PRIMARY KEY,
    workorder_id integer REFERENCES workorder(id) ON DELETE CASCADE NOT NULL,
    service_id integer REFERENCES service(id) NOT NULL,
    quantity numeric(9, 2)
);
CREATE TABLE workorder_transaction (
    id serial PRIMARY KEY,
    workorder_id integer REFERENCES workorder(id) ON DELETE RESTRICT NOT NULL,
    contact_id integer REFERENCES customer_contact(id) NOT NULL,
    transaction_id integer REFERENCES transaction(id) NOT NULL
);
CREATE TABLE purchase_order (
    id serial PRIMARY KEY,
    memo VARCHAR(400),
    creator_id integer REFERENCES employee(id) NOT NULL,
    opened_on timestamp WITH TIME ZONE NOT NULL DEFAULT NOW(),
    completed_on date CONSTRAINT opened_on CHECK (opened_on < completed_on) DEFAULT NULL
);
CREATE TABLE purchase_order_tag (
    id integer REFERENCES purchase_order(id),
    tag_id integer REFERENCES tag(id)
);
CREATE TABLE purchase_order_item (
    id serial PRIMARY KEY,
    purchase_order_id integer REFERENCES purchase_order(id) ON DELETE CASCADE NOT NULL,
    name varchar(64) NOT NULL,
    description varchar(360),
    quantity integer NOT NULL CONSTRAINT quantity CHECK (quantity > 0),
    price money NOT NULL CONSTRAINT price CHECK (price > '0.00')
);
CREATE TABLE purchase_order_transaction (
    id serial PRIMARY KEY,
    purchase_order_id integer REFERENCES purchase_order(id) ON DELETE RESTRICT NOT NULL,
    transaction_id integer REFERENCES transaction(id) NOT NULL
);
CREATE TABLE asset (
    id serial PRIMARY KEY,
    name varchar(64) UNIQUE NOT NULL,
    description varchar(340),
    purchase_value money NOT NULL CONSTRAINT purchase_value CHECK (purchase_value > '-1.00'),
    serial_key varchar(300),
    is_archived boolean DEFAULT FALSE
);
CREATE TABLE asset_tag (
    id serial PRIMARY KEY,
    asset_id integer REFERENCES asset(id) ON DELETE CASCADE NOT NULL,
    tag_id integer REFERENCES tag(id) ON DELETE CASCADE NOT NULL 
);
CREATE TABLE expense (
    id serial PRIMARY KEY,
    name varchar(64) NOT NULL,
    description varchar(300),
    is_active boolean DEFAULT TRUE NOT NULL
);
CREATE TABLE expense_tag (
    id serial PRIMARY KEY,
    expense_id integer REFERENCES expense(id),
    tag_id integer REFERENCES tag(id)
);
CREATE TABLE bill (
    id serial PRIMARY KEY,
    expense_id integer REFERENCES expense(id) NOT NULL,
    amount money NOT NULL,
    billing_date date NOT NULL DEFAULT CURRENT_DATE
);
CREATE TABLE bill_transaction (
    id integer REFERENCES bill(id) ON DELETE RESTRICT,
    transaction_id integer REFERENCES transaction(id)
);
CREATE TABLE pay_period (
    id serial PRIMARY KEY,
    start_date date NOT NULL,
    end_date date NOT NULL,
    pay_date date NOT NULL
);
CREATE TABLE payroll (
    id serial PRIMARY KEY,
    employee_id integer REFERENCES employee(id) NOT NULL,
    pay_period_id integer REFERENCES pay_period(id) NOT NULL
);
CREATE TABLE payroll_item (
    id serial PRIMARY KEY,
    payroll_id integer REFERENCES payroll(id) NOT NULL,
    name varchar(50) NOT NULL,
    amount money NOT NULL,
    quantity numeric(15, 2) NOT NULL
);
CREATE TABLE payroll_transaction (
    id integer REFERENCES payroll(id) ON DELETE RESTRICT,
    transaction_id integer REFERENCES transaction(id),
    memo varchar(400)
);
CREATE TABLE user_permission (
    id serial PRIMARY KEY, 
    name varchar(32) NOT NULL
);
CREATE TABLE user_permission_set (
    user_id integer REFERENCES user_account(id) NOT NULL,
    perm_id integer REFERENCES user_permission(id) ON DELETE CASCADE NOT NULL,
    perm boolean NOT NULL,
    PRIMARY KEY(user_id, perm_id)
);
CREATE TABLE bullet (
    id serial PRIMARY KEY,
    user_id integer REFERENCES user_account(id) NOT NULL,
    message varchar(1200) NOT NULL CONSTRAINT message CHECK (char_length(message) > 5),
    time_stamp timestamp WITH TIME ZONE NOT NULL DEFAULT NOW()
);
CREATE TABLE bullet_comment (
    id serial PRIMARY KEY,
    bullet_id integer REFERENCES bullet(id) NOT NULL ON DELETE CASCADE,
    user_id integer REFERENCES user_account(id) NOT NULL,
    message varchar(512) NOT NULL CONSTRAINT message CHECK (char_length(message) > 5),
    time_stamp timestamp WITH TIME ZONE NOT NULL DEFAULT NOW()
);
CREATE TABLE calendar_event (
    id serial PRIMARY KEY,
    user_id integer REFERENCES user_account(id),
    title varchar(80) NOT NULL,
    message varchar(1200) CONSTRAINT message CHECK (char_length(message) > 5),
    occurs_on date NOT NULL DEFAULT CURRENT_DATE,
    start_time time,
    end_time time
);
CREATE TABLE calendar_recurrence (
    id SERIAL PRIMARY KEY,
    event_id integer references calendar_event,
    weekday_recurrence weekday,
    
)
CREATE TABLE taskboard (
    id serial PRIMARY KEY, 
    name varchar(40) NOT NULL,
    creator_id integer REFERENCES user_account(id) NOT NULL
);
CREATE TABLE tasklist (
    id serial PRIMARY KEY,
    board_id integer REFERENCES taskboard(id),
    name varchar(255) NOT NULL
);
-- Get parents = SELECT * FROM `tasklist_task` WHERE (parent_task_id == null)
-- Get children = SELECT * FROM `tasklist_task` WHERE (parent_task_id == parent_id) -- Recursive
-- change on is_complete on parent means ALL children are by DEFAULT equal to parent's is_complete
CREATE TABLE tasklist_task (
    id serial PRIMARY KEY,
    -- null means it is not nested in anything
    parent_task_id integer REFERENCES tasklist_task(id),
    is_complete boolean DEFAULT FALSE NOT NULL,
    message varchar(200) NOT NULL
);
CREATE TABLE taskboard_participant (
    id serial PRIMARY KEY,
    taskboard_id integer REFERENCES taskboard(id) NOT NULL,
    user_id integer REFERENCES user_account(id) NOT NULL,
    can_write boolean DEFAULT TRUE NOT NULL,
    can_delete boolean DEFAULT FALSE NOT NULL,
    can_invite boolean DEFAULT FALSE NOT NULL
);
CREATE TABLE notification (
    id SERIAL PRIMARY KEY,
    user_id integer references user_account(id) NOT NULL,
    origin varchar(400) NOT NULL,
    message varchar(400) NOT NULL
);
GRANT ALL ON SCHEMA rabbitschema TO "Developer";
GRANT ALL ON ALL TABLES IN SCHEMA rabbitschema TO "Developer";
GRANT ALL ON ALL SEQUENCES IN SCHEMA rabbitschema TO "Developer";