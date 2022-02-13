import './styles.css';

export default function ChoiceBtn({choice, typeBtn}) {
    return (
        <button className={typeBtn === '1' ? 'choice-btn' : 'result-btn'} data-choice={choice}>
            <div className={`choice ${choice}`}>
                <img src={`./icon-${choice}.svg`} alt={`icon-${choice}`}></img>
            </div>
        </button>
    );
}