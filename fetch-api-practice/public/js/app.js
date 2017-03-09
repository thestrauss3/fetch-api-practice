let data = {
  book: {
    name: 'MY BALL'
  }
};
let jsonStringData = JSON.stringify(data);

fetch('http://localhost:4567/books.json', {
  method: 'post',
  body: jsonStringData
}).then(response => {
    if (response.ok) {
      return response;
    } else {
      let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
      throw(error);
    }
  })
  .then(response => response.json())
  .then(body => {
    console.log(body);
  })
  .catch(error => console.error(`Error in fetch: ${error.message}`));

  fetch('http://localhost:4567/books.json')
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      console.log("body: ");
      console.log(body);
      console.log(body.books[1].name)
      debugger;

      body.books.forEach((book) => {
        let books = document.getElementById('books');
        books.innerHTML += "<li>" + book.name + "</li>";
      })

    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));


    //
    // console.log("body");
    // console.log(body);
    // let $books = $(body['.books']);
    // books.append($books);
    // console.log(books);
    // $("books").append("<li>" + $books + "</li>");
    // let arrayOfCrew = [];
    // crewNames.forEach((name) => {
    //   let crewMember = new CrewMember(name);
    //   crewMember.trained = true;
    //   arrayOfCrew.push(crewMember);
    // });
    // return arrayOfCrew;
