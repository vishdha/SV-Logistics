# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from . import __version__ as app_version

app_name = "svlt"
app_title = "SV Logistics and Travels"
app_publisher = "SV Tech"
app_description = "Empowering Logistics and Travels Firm"
app_icon = "octicon octicon-file-directory"
app_color = "grey"
app_email = "vishaldhayagude07@gmail.com"
app_license = "GPL v3"

# Includes in <head>
# ------------------

# include js, css files in header of desk.html
# app_include_css = "/assets/svlt/css/svlt.css"
# app_include_js = "/assets/svlt/js/svlt.js"

# include js, css files in header of web template
# web_include_css = "/assets/svlt/css/svlt.css"
# web_include_js = "/assets/svlt/js/svlt.js"

# Home Pages
# ----------

# application home page (will override Website Settings)
# home_page = "login"

# website user home page (by Role)
# role_home_page = {
#	"Role": "home_page"
# }

# Website user home page (by function)
# get_website_user_home_page = "svlt.utils.get_home_page"

# Generators
# ----------

# automatically create page for each record of this doctype
website_generators = ["Web Page"]

# Installation
# ------------

# before_install = "svlt.install.before_install"
# after_install = "svlt.install.after_install"

# Desk Notifications
# ------------------
# See frappe.core.notifications.get_notification_config

# notification_config = "svlt.notifications.get_notification_config"

# Permissions
# -----------
# Permissions evaluated in scripted ways

# permission_query_conditions = {
# 	"Event": "frappe.desk.doctype.event.event.get_permission_query_conditions",
# }
#
# has_permission = {
# 	"Event": "frappe.desk.doctype.event.event.has_permission",
# }

# Document Events
# ---------------
# Hook on document methods and events

# doc_events = {
# 	"*": {
# 		"on_update": "method",
# 		"on_cancel": "method",
# 		"on_trash": "method"
#	}
# }

# Scheduled Tasks
# ---------------

# scheduler_events = {
# 	"all": [
# 		"svlt.tasks.all"
# 	],
# 	"daily": [
# 		"svlt.tasks.daily"
# 	],
# 	"hourly": [
# 		"svlt.tasks.hourly"
# 	],
# 	"weekly": [
# 		"svlt.tasks.weekly"
# 	]
# 	"monthly": [
# 		"svlt.tasks.monthly"
# 	]
# }

# Testing
# -------

# before_tests = "svlt.install.before_tests"

# Overriding Whitelisted Methods
# ------------------------------
#
# override_whitelisted_methods = {
# 	"frappe.desk.doctype.event.event.get_events": "svlt.event.get_events"
# }

