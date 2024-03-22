package collections.Set.HashSet.removeAll;

import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

public class Main {
    public static void main(String[] args) {
        Set<Integer> mySet1 = new HashSet<>(Arrays.asList(1,1,2,2,3,3));
        Set<Integer> mySet2 = new HashSet<>(Arrays.asList(1,2,2,2,4,4));

        mySet1.removeAll(mySet2);
        System.out.println(mySet1);
    }
}
