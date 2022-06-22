import './App.css';
import MyHeader from './MyHeader';
import MyFooter from './MyFooter';

function App() {
    const number = 5;

    return (
        <div className="App">
            <MyHeader />
            <h2>안녕리엑트</h2>
            <b id="bold_text">
                {number}는 : {number % 2 === 0 ? '짝수' : '홀수'}
            </b>
            <MyFooter />
        </div>
    );
}

export default App;
