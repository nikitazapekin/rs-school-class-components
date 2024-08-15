import { useState } from "react";

// Define the type for the props if you are using props. 
// Since there are no props in this component, we don't need a Props type.
const TestAuto: React.FC = () => {
    // State hook with string type
    const [value, setValue] = useState<string>("");

    // Event handler type definition
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    // Type for omSearch function parameter
    const omSearch = (searchTerm: string) => {
        console.log("search", searchTerm);
    };

    // Array of strings (data) with explicit type annotation
    const data: string[] = [
        "tes",
        "arr",
        "val",
        "value",
        "vacuum"
    ];

    return (
        <>
            <div>
                <input
                    type="text"
                    value={value}
                    onChange={onChange}
                />
                <button onClick={() => omSearch(value)}>
                    click
                </button>
                <div>
                    {data
                        .filter(item => {
                            const searchTerm = value.toLowerCase();
                            const el = item.toLowerCase();
                            return searchTerm && el.startsWith(searchTerm);
                        })
                        .map(item => (
                            <div
                                key={item} // Key prop added for list rendering
                                onClick={() => omSearch(item)} // Updated to function reference
                            >
                                {item}
                            </div>
                        ))}
                </div>
            </div>
        </>
    );
};

export default TestAuto;




/*
import { useState } from "react";

const TestAuto = () => {
    const [value, setValue] = useState("")
    const onChange = (event) => {
        setValue(event.target.value)
    }
    const omSearch = (searchTerm) => {
        console.log("search", searchTerm)
    }
    const data = [
        "tes",
        "arr",
        "val",
        "value",
        "vacuum"
    ]
    return (<>
        <div>
            <input type="text" value={value} onChange={onChange} />
            <button onClick={() => {
                omSearch(value)
            }}>
                click
            </button>
            <div>
                {data.filter(item => {
                    const searchTerm = value.toLocaleLowerCase()
                    const el = item.toLocaleLowerCase()
                    return searchTerm && el.startsWith(searchTerm)
                }).map(item => (
                    <div onClick={omSearch(item)}>
                        {item}
                    </div>
                ))}
            </div>
        </div>
    </>);
}

export default TestAuto;
*/