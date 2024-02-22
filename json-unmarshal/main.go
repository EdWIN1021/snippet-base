package main

import (
	"encoding/json"
	"fmt"
)



type person struct {
	First string  `json:"First"`
	Last  string  `json:"Last"`
	Age   int     `json:"Age"`
}


func main (){
	s := `[{"First":"James","Last":"Bond","Age":32},{"First":"Miss","Last":"Moneypenny","Age":27}]`
	b := []byte(s)
	people := []person{}

	err := json.Unmarshal(b, &people)

	if err != nil {
		fmt.Println(err)
	}
	
	fmt.Println(people)
}