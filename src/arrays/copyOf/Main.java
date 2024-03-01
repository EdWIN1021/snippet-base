package arrays.copyOf;

import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        int [] arr = {1,2,3,4,5};
        int [] newArr = Arrays.copyOf(arr, arr.length);

        System.out.println(Arrays.toString(newArr));
    }
}
