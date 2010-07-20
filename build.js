load('steal/file/file.js')

var i, fileName, cmd;

// create syn.js
var plugin, fileDest, fileName;
plugin = "funcunit/synthetic";
fileName = "syn.js";
fileDest = "funcunit/dist/"+fileName
cmd = "js steal/scripts/pluginify.js "+plugin+" -destination "+fileDest+" -noJQuery";
runCommand(	"cmd", "/C", cmd)
print("***"+fileName+" pluginified")

// create funcunit.js
plugin = "funcunit";
fileName = "funcunit.js";
fileDest = "funcunit/dist/"+fileName
cmd = "js steal/scripts/pluginify.js "+plugin+" -destination "+fileDest+" -packageJQuery -noJQuery";
runCommand(	"cmd", "/C", cmd)
print("***"+fileName+" pluginified")

// copy jars and env
new steal.File("funcunit/java/selenium-server.jar")
	.copyTo("funcunit/dist/selenium/selenium-server.jar", [])
new steal.File("funcunit/java/selenium-java-client-driver.jar")
	.copyTo("funcunit/dist/selenium/selenium-java-client-driver.jar", [])
new steal.File("steal/rhino/js.jar")
	.copyTo("funcunit/dist/selenium/js.jar", [])
new steal.File("steal/rhino/env.js")
	.copyTo("funcunit/dist/selenium/env.js", [])
	
// copy qunit, json, and jquery
new steal.File("funcunit/qunit/qunit.css")
	.copyTo("funcunit/dist/qunit.css", [])
new steal.File("jquery/lang/json/json.js")
	.copyTo("funcunit/resources/json.js", [])
	
// copy files into selenium
new steal.File("funcunit/resources/json.js")
	.copyTo("funcunit/java/selenium-server/core/scripts/json.js", [])
new steal.File("funcunit/dist/syn.js")
	.copyTo("funcunit/java/selenium-server/core/scripts/syn.js", [])
new steal.File("funcunit/resources/jquery.js")
	.copyTo("funcunit/java/selenium-server/core/scripts/jquery.js", [])

//new steal.File("../jmvcdownload").zipDir("javascriptmvc-3.0.0.zip", "..\\jmvcdownload\\")