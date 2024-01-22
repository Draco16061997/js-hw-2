// Создание библиотеки для управления книгами

// Создайте JavaScript класс Book, который будет представлять 
// книгу с такими свойствами:

// title (название книги)
// author (автор книги)
// publishedYear (год публикации книги)
// isRead (булевое значение, указывающее, прочитана ли книга)
// Затем создайте другой класс Library, который будет представлять библиотеку.
//  Этот класс должен иметь следующие методы:

// addBook(book) - добавляет экземпляр класса Book в библиотеку.
// removeBook(bookTitle) - удаляет книгу с заданным названием из библиотеки.
// listBooks() - выводит список всех книг в библиотеке, предоставляя 
// информацию о названии, авторе, годе публикации и 
// статусе прочтения каждой книги.
// markAsRead(bookTitle) - устанавливает статус прочтения книги 
// с заданным названием как true.
// markAsUnread(bookTitle) - устанавливает статус прочтения книги
//  с заданным названием как false.
// Создайте несколько экземпляров класса Book и класса Library, 
// чтобы продемонстрировать функциональность вашей библиотеки.


class Book{
    constructor(title, autor, publisherYear){
        this.title = title;
        this.autor = autor;
        this.publisherYear = publisherYear;
        this.isRead = false;
    }

    print_info(){console.log("Title: "+ this.title+"\n"+"Autor: " + this.autor+
    "\n"+"Publish Year: "+this.publisherYear+"\n"+"Is read: "+ this.isRead)}

}


const myBook = new Book("book","Jon", 2010)


class Library{
    constructor(){
        this.Library = []

    }

    addBook(book){
        this.Library.push(book)
        console.log("book "+book.title+" ADD!")
    }

    removeBook(title_book){
        for(let i = 0; i < this.Library.length; i++){

            if (this.Library[i].title == title_book){
                console.log(this.Library[i].title+" is remove")
                this.Library.slice(i,1)
                
            }
        }
    }

    listBooks(){
        for(let i =0; i < this.Library.length; i++){
            console.log(this.Library[i].print_info())
        }
    }

    markAsRead(bookTile){
        for(let i = 0; i < this.Library.length; i++){

            if (this.Library[i].title == bookTile){
                console.log(this.Library[i].title+" Read!")
                this.Library[i].isRead = true;
                
                
            }
        }
    }

    markAsUnead(bookTile){
        for(let i = 0; i < this.Library.length; i++){

            if (this.Library[i].title == bookTile){
                console.log(this.Library[i].title+" Unread!")
                this.Library[i].isRead = false;
                
                
            }
        }
    }






}

let myLib = new Library()
myBook.print_info()
myLib.addBook(myBook)
myLib.markAsRead("book")
myLib.listBooks()
myLib.markAsUnead("book")
myLib.listBooks()
myLib.removeBook("book")