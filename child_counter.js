// 1.
// * Get the children of the element with id `wrapper` and print them to the console as a list.

const wrapperList = document.querySelector("#wrapper");
console.log(wrapperList.children);



// * Iterate over them and print their children to the console, as well as how many they are.
// Note: We do not want to do this operation recursively, we just do it for the children of wrapper and its children.

// Note: There are 2 ways to print the number of children - give them both a try.

console.log(wrapperList.children.length);

console.log(wrapperList.childElementCount);




// ## 2.

// * Next, we need to find which from the children of the element with id `wrapper` has the highest number of classes.


Array.from(wrapperList.children).map((child) => console.log(child.classList.length));
// it prints that: 1 child has 9 classes,  3 children have 7 classes,  4 children have 4 classes.


//     For example, if one element has 2 classes and another has 3 classes - the one with 3 classes has the highest number of classes.

//     Let's write a function that returns an object that contains the element with the most classes and the total number of classes.

function childWithMostClasses() {
    let mostclasses = 0;
    let mostclassesChild = 0;
    for (let child of wrapperList.children) {
        if (child.classList.length > mostclasses) {
            mostclasses = child.classList.length;
            mostclassesChild = child;
        }

    }
    return {
        "MostClasseselement": mostclassesChild,
        Length: mostclasses,
    };
}

console.log(childWithMostClasses());

//{"MostClasseselement": {
//         banner.style1.orient-left.content-align-left.image-position-right.fullscreen.onload-image-f…
//         }
//     },
//     "Length": 9
// };