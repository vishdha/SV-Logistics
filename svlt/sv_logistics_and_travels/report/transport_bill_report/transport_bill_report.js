// Copyright (c) 2016, SV Tech and contributors
// For license information, please see license.txt

frappe.query_reports["Transport Bill Report"] = {
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
			default: frappe.defaults.get_user_default("year_start_date"),
		},
		{
			fieldname:"to_date",
			label: __("To Date"),
			fieldtype: "Date",
			default: get_today()
		},


	]
}

/*pdf_report: function() {
		if(!frappe.model.can_print(this.report_doc.ref_doctype)) {
			msgprint(__("You are not allowed to make PDF for this report"));
			return false;
		}

		if(this.html_format) {
			var content = frappe.render(this.html_format,
				{data: this.dataView.getItems(), filters:this.get_values(), report:this});

			//Render Report in HTML
			var html = frappe.render_template("print_template", {content:content, title:__(this.report_name)});
		} else {
			var columns = this.grid.getColumns();
			var data = this.grid.getData().getItems();
			var content = frappe.render_template("print_grid", {columns:columns, data:data, title:__(this.report_name)})

			//Render Report in HTML
			var html = frappe.render_template("print_template", {content:content, title:__(this.report_name)});
		}

		//Create a form to place the HTML content
		var formData = new FormData();

		//Push the HTML content into an element
		formData.append("html", html);
		var blob = new Blob([], { type: "text/xml"});
		//formData.append("webmasterfile", blob);
		formData.append("blob", blob);

		var xhr = new XMLHttpRequest();
		xhr.open("POST", '/api/method/frappe.utils.print_format.report_to_pdf');
		xhr.setRequestHeader("X-Frappe-CSRF-Token", frappe.csrf_token);
		xhr.responseType = "arraybuffer";

		xhr.onload = function(success) {
		    if (this.status === 200) {
		        var blob = new Blob([success.currentTarget.response], {type: "application/pdf"});
		        var objectUrl = URL.createObjectURL(blob);

		        //Open report in a new window
		        window.open(objectUrl);
		    }
		};
		xhr.send(formData);
	},*/