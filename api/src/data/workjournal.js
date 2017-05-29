var Data = require("../data")
/*
 * @property id: Id of a single work-journal (employees can have many)
 * @property employee_id: Id of the employee that owns the work journal
 * @property name: The name of the work journal
 */
export const tablename = 'workjournal'
export default class Workjournal {
	constructor(id, employee_id, name){
		this.id = id
		this.employee_id = employee_id
		this.name = name
		this.Update = Data.Update.bind(this.Update, this)
		this.Sync = Data.Sync.bind(this.Sync, this)
		this.Save = Data.Save.bind(this.Save, this)
		this.Delete = Data.Delete.bind(this.Delete, this)
	}
}

Workjournal.Delete     = Data.Delete.bind(Workjournal.Delete)
Workjournal.prototype.tablename = tablename
Workjournal.Page       = Data.Page.bind(Workjournal.Page)
Workjournal.List       = Data.List.bind(Workjournal.List)
Workjournal.Save       = Data.Save.bind(Workjournal.Save)
Workjournal.Sync       = Data.Sync.bind(Workjournal.Sync)
Workjournal.Search     = Data.Search.bind(Workjournal.Search)
Workjournal.Update     = Data.Update.bind(Workjournal.Update)