package collections.Collections.disjoint;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class Main {
    public static void main(String[] args) {

        List<Integer> list1 = new ArrayList<>(Arrays.asList(1,2,3,4,5));
        List<Integer> list2 = new ArrayList<>(Arrays.asList(6,7,8,9,10));


        // check whether two collections have no elements in common
        System.out.println(Collections.disjoint(list1, list2));
    }
}
