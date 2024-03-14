package Arrays.setAll;

import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        String [] arr = new String[10];
        Arrays.fill(arr, "");
        Arrays.setAll(arr, (i)-> "" + (i + 1));

        System.out.println(Arrays.toString(arr));
    }
}
