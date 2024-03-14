package Arrays.deepToString;

import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        int[][] multiDimensionalArray = {
                {1, 2, 3},
                {4, 5, 6},
                {7, 8, 9}
        };

        System.out.println(Arrays.deepToString(multiDimensionalArray));
    }
}
