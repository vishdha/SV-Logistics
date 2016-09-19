// Copyright (c) 2016, SV Tech and contributors
// For license information, please see license.txt

frappe.query_reports["Vishal Transport Bill Report"] = {
	"filters": [
		{
			fieldname: "sv_vehicle",
			label: __("Vehicle"),
			fieldtype: "Link",
			options: "Vehicle"
		},
		{
			fieldname: "from_date",
			label: __("From Date"),
			fieldtype: "Date",
		},
		{
			fieldname:"to_date",
			label: __("To Date"),
			fieldtype: "Date",
			default: get_today()
		},

	]
}
