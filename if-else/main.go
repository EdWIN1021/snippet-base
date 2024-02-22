package main

import "fmt"

func main(){
	if num := 10; num > 0 {
		fmt.Println("num > 0")
	} else if num < 0 {
		fmt.Println("num < 0")
	} else {
		fmt.Println("num == 0")
	}
}