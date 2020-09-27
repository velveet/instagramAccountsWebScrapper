import axios from 'axios'

const Accounts = ({accounts}) => {

    const onTrack = async (e) => {
        try {
            e.preventDefault();
            console.log(document.getElementById('accountUrl').innerText);
            const accountUrl = document.getElementById('accountUrl').innerText;
            const response = await axios.post('http://localhost:5000/mail',{account: accountUrl});
            console.log(response.data);
        } catch (err) {
            console.error(err.message);
        }
    }

    return (
        <ul className="mt-5">
            {
                accounts.map(account => (
                <li className="list-group-item list-group-item-action" key={account.id}>
                    <div className="row ml-2">
                        <h5 className="d-flex">{account.id}-<div id="accountUrl">{account.account}</div></h5>
                        <button type="button" className="btn btn-outline-secondary ml-auto mr-4" onClick={onTrack}>Track Account</button>
                    </div>
                    
                </li>
                ))
            }
        </ul>
    )
}

export default Accounts