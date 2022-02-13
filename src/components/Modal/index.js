import './styles.css';

export default function Modal({open}) {
    return (
        <div className="container-modal">
            <div className="modal">
                <div className="modal-header">
                    <h1>RULES</h1>
                    <button onClick={open}>
                        <img src="../../../icon-close.svg" alt="Close"/>
                    </button>
                </div>
                <div className="modal-body">
                    <img src='../../../image-rules.svg' alt="Rules"/>
                </div>
            </div>
        </div>
    );
}