var test1,
    test2,
    obj, // As you note obj here, in this block, you can delete the VAR in var obj below, to avoid repetition
    fullname = "John";

obj = {
    fullname: "Jane",
    prop: {
        fullname: "Tom",
        getName: function () {
            return this.fullname;
        }
    }
};

// Copy the function
var test = obj.prop.getName;
// What does the console display?
console.log(obj.prop.getName()); //"Tom", as the function runs in the context of "prop" object
console.log(test()); // "John", function runs in the global context

// End original code

// +++++++++++++++++++++++++++++++++++++++++++++++
// Task 1 - we want test to return "Tom"
// +++++++++++++++++++++++++++++++++++++++++++++++


// Make a copy of function, bound to "prop" object...
// "this" in the function will be the "prop" object
test1 = obj.prop.getName.bind(obj.prop); // "Tom", as module here is the specific obj.prop (with "Tom"), not obj (with "Jane")
console.log(test1());


// +++++++++++++++++++++++++++++++++++++++++++++++
// Task 2 - we want test to return "Jane"
// +++++++++++++++++++++++++++++++++++++++++++++++

test2 = obj.prop.getName.bind(obj); // "Jane", as our module here is obj (with "Jane"), not the specific obj.prop (with "Tom")
console.log(test2());