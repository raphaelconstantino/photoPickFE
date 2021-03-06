import React, { Component } from 'react';

class InsertTest extends Component {
  
	constructor () {
		super();
        this.state = {
            category : "",
            file : ""
        };
        this.setField = this.setField.bind(this);
    }    

    setField (fieldName, e)
    {
        let field = {};
        field[fieldName] = e.target.value ;
        this.setState(field);
    }   	
  
	sendData (e) {
        
        e.preventDefault();   

        function uploadFiles(files) {
            
            var formData = new FormData();
           
            for (var i = 0; i < files.length; i++) {
                
                var file = files[i];

                // Check the file type.
                if (!file.type.match('image.*')) {
                    continue;
                }

                // Add the file to the request.
                formData.append('file', file, file.name);
            }

            return formData;
           
        }

        
        /**
         * TODO - Fix hard http call
         */
        return fetch("/tests", {
            headers: { 
                'x-access-token' : localStorage.getItem('auth-token'),
                'category' : this.state.category            
            },
            method: 'post',
            body: uploadFiles(document.querySelector('input[type="file"]').files) // TODO - Fix querySelector
        })

	}

    render() {
        return (
            <div className="Tests">
                <h1> Insert New Test!</h1>
                <form role="form" onSubmit={this.sendData.bind(this)}>
                    <div className="form-group">    
                        <label htmlFor="category">Category:</label>
                        <input className="form-control" id="category" type="text" name="category" value={this.state.category} onChange={this.setField.bind(this, "category")} />
                    </div>    
                    <div className="form-group">        
                        <label htmlFor="upload">Upload Photo:</label>
                        <input id="upload" className="form-control" type="file" name="file" value={this.state.file} onChange={this.setField.bind(this, "file")} />
                    </div>    
                    <button className="btn btn-info" type="submit">Submit</button>
                </form>    
            </div>
        );
    }
}

export default InsertTest;
