package main

import "fmt"

func main(){

	// for loop
	for i := 0; i < 5; i++ {
		fmt.Println(i)
	} 

	// while loop
	j := 0
	for j < 5 {
		fmt.Println(j)
		j++
	}

	// infinity loop
	for {
        fmt.Println("loop")
        break
    }

	// range
	nums := []int{ 1, 2, 3, 4, 5 }
	for i := range nums {
        fmt.Println(i)
    }

	for i, v := range nums {
        if v%2 == 0 {
            continue
        }
        fmt.Printf("index: %d value: %d \n", i, v)
    }
}