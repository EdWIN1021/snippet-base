package fill;

import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        int [] arr = new int [10];

        Arrays.fill(arr, 2);
        System.out.println(Arrays.toString(arr));
    }
}
