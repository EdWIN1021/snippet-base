package main

import "fmt"


func main() {
	s := []string{"first", "second", "third"}
	fmt.Println(s, len(s))


	/*
		a `clear` function that takes in a slice and sets all of the slice’s elements to their zero value. 
		The length of the slice remains unchanged.
	*/ 
	
	clear(s)
	fmt.Println(s, len(s))

}