var mongoose = require('mongoose');

// Now we will convert this schema to model
var issue = mongoose.model('issue', issueSchema);
var student = mongoose.model('student', studentSchema);
function fetch_student_data(mis){
  student.find({mis:mis}, function(err, users) {
  if (err){
    alert("MIS invalid")
    throw err;
  }

    else{
      // console.log(users[0].name);
      issue.find({mis:mis}, function(err, books_under_this_mis) {
        if (err) {
          alert("thisone");
          throw err;
        }
      else {
          console.log(books_under_this_mis.length);
      }
    });
      document.getElementById('mis').innerHTML = users[0].mis ;
      document.getElementById('student_name').innerHTML = users[0].name ;
      document.getElementById('year').innerHTML = users[0].year ;
      document.getElementById('branch').innerHTML = users[0].branch ;
      document.getElementById('books_issued').innerHTML = users[0].name ;
    }
  });
}

function issue_book(mis, ac_no){
    // check if the book ac_no is valid
      var return_date;
      {
          {
            var return_date = new Date();
            return_date.setMonth(return_date.getMonth() + 2);
            // console.log(d);
          }

          book.find({accountnumber : ac_no}, function(err, book) {
            if (err) throw err;
            else{
              console.log(book[0].title);
              var temp = new issue({
                book_ac_no : ac_no,
                mis : mis,
                // date_of_issue : Date.now,
                date_of_return : return_date
              });
              temp.save(function (err) {
                if (err) {
                  // window.alert("Please check the account number");
                  alert("This Book is already issued, Please check the account number of the book");
                  Object.keys(err.errors).forEach(function(key) {
                    var message = err.errors[key].message;
                    console.log('Validation error for "%s": %s', key, message);
                    // console.error(err);
                  });
                }
                else{
                  console.log("Book issued");
                  alert("Book issued");
                }
              });
            }
          });
      }
}