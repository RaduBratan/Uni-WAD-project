import "./RequestButton.css";

export const RequestButton = ({
                            method, 
                            baseUrl, 
                            url, 
                            params, 
                            body,
                            setUsername,
                            setEmail,
                            bearerToken,
                            setBearerToken,
                            setColumns,
                            setRows}) => {
    url = baseUrl + url;

    if(params) {
        for(let param of params) {
            url += '/' + param.data;
        }
    }

    // console.log('url')
    // console.log(url);

    // console.log('body')
    // console.log(body);

    let newBody = {}

    if(body) {
        for(let bodyItem of body) {
            console.log(bodyItem);
            newBody[Object.values(bodyItem)[0]] = Object.values(bodyItem)[1];
        }
    }

    console.log("newbody")
    console.log(newBody);
    // console.log("new body");
    // console.log(newBody);

    const onClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const headers = {
            'Content-type': 'application/json',
            'Authorization': bearerToken,
        };

        console.log("params")
        console.log(params);
        console.log("body");
        console.log(body);
        console.log("newbody")
        console.log(newBody);
        if(newBody !== undefined && Object.keys(newBody).length === 0)
            newBody = undefined;

        //console.log(JSON.stringify(newBody));

        fetch(url, {
            method,
            headers,
            body: JSON.stringify(newBody)
        })
        .then(res => {console.log(res); return res.json()})
        .then(data => {
            if(url.includes('loginUser')) {
                setUsername(data.firstName + ' ' + data.lastName);
                setEmail(data.email);
                setBearerToken('Bearer ' + data.token);
            } else {
                if(data === null || data === undefined || data.length === 0) {
                    setColumns(null);
                    setRows(null);
                } else {
                    console.log("data")
                    console.log(data)
                    if(data instanceof Array === false)
                        data = [data];
                    console.log("new data");
                    console.log(data);
                    setColumns(Object.keys(data[0]).map((name, id) => 
                        {
                            return {id: id + 1, name}
                        }
                    ));
                    console.log("data");
                    console.log(data);
                    setRows(
                        data.map((row, rowId) => 
                        {
                            return {
                                id: rowId, 
                                data: Object.values(row).map((tdata, tdataId) => {
                                    return {
                                        id: tdataId + 1,
                                        data: tdata
                                    }
                                })
                            }
                        })
                    );
                }
            }
            console.log(data);
        }).catch(err => {
            console.log(err);
        });
    }

    return <button className="RequestButton" onClick={onClick} type="button">SEND!</button>
}