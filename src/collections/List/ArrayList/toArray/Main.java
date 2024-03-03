package collections.List.ArrayList.toArray;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Main {
    public static void main(String[] args) {

        ArrayList<Integer> list = new ArrayList<>(List.of(1,2,3,4,5));

        System.out.println(Arrays.toString(list.toArray()));


    }
}
