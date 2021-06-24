// JavaScript for Posts page

//alert('hello'); - just to check 
$(function () {
    // executed when the menubar is clicked
    $('.fa-ellipsis-h').click(function () {
        /*console.log('clicked again');
        alert('clicked');*/
        $(this).next().toggle(); // this refers to the self element name
        
    })
})