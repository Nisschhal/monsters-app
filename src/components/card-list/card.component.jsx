import './card.style.css';

const Card = ({ monster }) => {

        // d-structuring the details from the list
        const { name, email, id } = monster;
        return (
            <div  className="card-container" key={id}>
                {/* fetching the random image date using the image src */}
            <img src={`https://robohash.org/${id}?set=set4&size=180x180`} alt={`monster ${name}`} className="src" />
            <h2>{name}</h2>
            <p>{email}</p>
          </div>
        );
}

export default Card;