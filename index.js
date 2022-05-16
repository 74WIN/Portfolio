window.addEventListener('load', init)

let myModal = document.getElementById('myModal')
let myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})


// let projects = [
//     {
//         name: "Sushi King Reservering systeem",
//         image: {
//                 screenshot: "", 
//                 banner: ""
//         }, 
//         description: "",
//         url: {
//             demo: "",
//             app: ""
//         },
//     },
//     {
//         name: "The Greedy Spy",
//         image: {
//                 screenshot: "", 
//                 banner: ""
//         }, 
//         description: "",
//         url: {
//             demo: "",
//             app: ""
//         },
//     },
//     {
//         name: "Weapon API",
//         image: {
//                 screenshot: "", 
//                 banner: ""
//         }, 
//         description: "",
//         url: {
//             demo: "",
//             app: ""
//         },
//     },
//     {
//         name: "",
//         image: {
//                 screenshot: "", 
//                 banner: ""
//         }, 
//         description: "",
//         url: {
//             demo: "",
//             app: ""
//         },
//     },
//     {
//         name: "",
//         image: {
//                 screenshot: "", 
//                 banner: ""
//         }, 
//         description: "",
//         url: {
//             demo: "",
//             app: ""
//         },
//     },
// ]