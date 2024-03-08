package main

import "fmt"


func main() {
	a := 10;
	pointerA := &a;
	fmt.Println(pointerA);

	b := 20;
	pointerB := &b;
	fmt.Println(100 + *pointerB);

}