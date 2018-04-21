var task = {};

task.title = "My task";
task.description = "My description";
task.toString = function() {
    return this.title + ' ' + this.description;
}
console.log(task.toString());