var fs = require('fs');
var cleaver_theme = 'matmuchrapna/cleaver-ribbon'
var feature_dir = "features";
var markdown_contents = "title: Live documentation\nOutput: livedocument.html\ntheme: " + cleaver_theme + "\n\n";
var markdown_file = "livedocument.md";
var feature_contents = "";

var files = fs.readdirSync(feature_dir);
for(var index = 0; index < files.length; index++){
	feature_contents += fs.readFileSync(feature_dir + '/' + files[index]);
}

markdown_contents += feature_contents.replace(/Feature/g, '--\n## Feature').
replace(/Scenario/g, '--\n## Scenario').
replace(/Given/g, '* _Given_').
replace(/When/g, '* _When_').
replace(/Then/g, '* _Then_').
replace(/As/g, '* _As_').
replace(/I want/g, '* _I want_').
replace(/So that/g, '* _So that_').
replace(/Examples/g, '## Examples').
replace(/^\|/g, '\`').
replace(/$\|/g, '\`');
// replace(/\n\| /g, '\n> \|'); //FIXME: should find the right position to insert table tags

fs.writeFile(markdown_file, markdown_contents, function(err) {
    if (err) {
        return console.log(err);
    }
    console.log("Tranform the feature files into markdown successfully!!");
});

