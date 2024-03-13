package Lambda;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Main {
    record Person (String firstName, String lastName){
        @Override
        public String toString() {
            return firstName + " " + lastName;
        }
    }

    public static void main(String[] args) {
        List<Person> people = new ArrayList<>(Arrays.asList(
                new Main.Person("Lucy", "Van Pelt"),
                new Main.Person("Sally", "Brown"),
                new Main.Person("Linus", "Van Pelt"),
                new Main.Person("Peppermint", "Patty"),
                new Main.Person("Charlie", "Brown")));

      people.sort((o1, o2) -> o1.lastName.compareTo(o2.lastName));
        System.out.println(people);
    }
}
