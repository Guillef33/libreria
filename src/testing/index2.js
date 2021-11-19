import React from 'react';
import ReactDom from 'react-dom';

//stateless function component
// always return JSX

//CSS
import './index.css'; 
// Constants

const firstBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/41kuAx41bCL._SX329_BO1,204,203,200_.jpg",
  title: "The Storyteller: Tales of Life and Music",
  author: "David Grohl"
};

const secondBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/41QhuwRJ43S._SX329_BO1,204,203,200_.jpg",
  title: "Taste: My Life Through Food",
  author: "Stanley Tucci",
};

const thirdBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/41GlPC9yjzS._SX329_BO1,204,203,200_.jpg",
  title: "Bourdain: The Definitive Oral Biography",
  author: "Laurie Woolever",
};

const autor = "David Grohl";
const titulo = "The Storyteller: Tales of Life and Music";
const img =
  "https://images-na.ssl-images-amazon.com/images/I/41kuAx41bCL._SX329_BO1,204,203,200_.jpg";

function BookList() {
  return (
    <>
      <div className="title">
        <h1>Una buena lista de libros</h1>
      </div>
      <section className="bookList">
        <Book
          img={firstBook.img}
          title={firstBook.title}
          author={firstBook.author}
        >
          {/* <p>
            Having entertained the idea for years, and even offered a few
            questionable opportunities ("It's a piece of cake! Just do 4 hours
            of interviews, find someone else to write it, put your face on the
            cover, and voila!"
          </p> */}
        </Book>
        <Book
          img={secondBook.img}
          title={secondBook.title}
          author={secondBook.author}
        >
          {/* <p>
            Stanley Tucci grew up in an Italian American family that spent every
            night around the kitchen table. He shared the magic of those meals
            with us in The Tucci Cookbook and The Tucci Table
          </p> */}
        </Book>
        <Book
          img={thirdBook.img}
          title={thirdBook.title}
          author={thirdBook.author}
        >
          {/* <p>
            When Anthony Bourdain died in June 2018, fans around the globe came
            together to celebrate the life of an inimitable man who had
            dedicated his life to traveling nearly everywhere (and eating nearly
          </p> */}
        </Book>

      </section>
    </>
  );
}


const Book = (props) => {
  const {img,title,author} = props // objet destructuring the properties
  return (
    <article className="book">
      <img src={img} alt="cover" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      {props.children}

    </article>
  );
};


// const Image = () => <img src="https://images-na.ssl-images-amazon.com/images/I/41kuAx41bCL._SX329_BO1,204,203,200_.jpg" alt="Storyteller"/>

// const Title = () => <h1>The Storyteller: Tales of Life and Music </h1>;
/* <Author /> */
// const Author = () => <h2 style={ {color:'red', fontSize:'0.75rem', marginTop:'0.25rem' } }>Dave Grohl</h2>;

// function Greeting() {
//   return (
//     <section>
//       This is a bookList
//       <div className="flexDiv">
//         <div>
//           <Person />
//           <Message />
//         </div>
//         <div>
//           <Image />
//         </div>
//       </div>
//     </section>
//   );
// }


// const Person = () => {
//   return <h2>Hola Soy John Doe</h2>;
// };

// const Message = () => {
//   return <h4>This is a good component</h4>;
// };

// const Image = () => {
//   return <img src="./public/logo192.png" alt="Imagen"/>;
// };




ReactDom.render(<BookList />, document.getElementById("root"));