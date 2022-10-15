import ReactDom from 'react-dom';

// CSS
import './index.css';
import { books } from './books';

// Setting up Vars
const author = 'Griffiths';
const title = 'React Cookbook';
const img = 'https://m.media-amazon.com/images/I/8143qzQAuxL._AC_UY436_FMwebp_QL65_.jpg';

function BookList() {
	return (
		<section className="bookList">
			{books.map((book) => {
				// attribute
				// events
				const clickHandler = () => {
					alert('Hello World');
				};
				const complexExample = (title) => {
					alert(title);
				};
				return (
					<article className="book">
						<img src={book.img} alt="" style={{ height: '300px', width: '300px' }} />
						<h1 style={{ color: '#8d2525' }}>{book.title || title}</h1>
						<h4
							onMouseOver={(event) => {
								event.target.style.color = 'aliceblue';
							}}
							onMouseOut={(e) => {
								e.target.style.color = 'brown';
							}}
						>
							Author: {book.author || author}
						</h4>
						<button type="button" onClick={clickHandler}>
							Click me!
						</button>
						<button type="button" onClick={() => complexExample(book.title)}>
							more Complex Example
						</button>
					</article>
				);
			})}
		</section>
	);
}

/*
const Book = (props, children) => {
	return (
		<article className="book">
			<Image />
			<Title title={props.title} />
			<Author author={props.author} />
			<p>{props.job}</p>
			{props.children}
		</article>
	);
}; */

/*
const Image = (props) => <img src={img} alt="" style={{ height: '300px', width: '300px' }} />;

const Title = (props) => <h1 style={{ color: '#8d2525' }}>{props.title || title}</h1>;
const Author = (props) => <h4>Author: {props.author || author}</h4>; */

ReactDom.render(<BookList />, document.getElementById('root'));
