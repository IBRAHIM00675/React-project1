
const Create = () =>{
    return(
        <div className="Form"> 
            <form >
                <label for="username">Title:</label>
                <input type="text" id="username" name="username" placeholder="Enter the title"></input>
                <label for="username">Author:</label>
                <input type="text" id="username" name="username" placeholder="Enter author's name"></input>
                <label for="username">Body</label>
                <textarea name="" rows={'5'} id=""></textarea>

            </form>
            <div className="btn">
                <button>Save blog</button>

            </div>
        </div>
    );
}
export default Create;