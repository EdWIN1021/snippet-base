package classes.static_variables;

public class Person {

    private static long id = 0;
    private String firstName;

    private String lastName;

    public Person(String firstName, String lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        id++;
    }


    @Override
    public String toString() {
        return "Person{ id=" + id +
                ", firstName='" + this.firstName + '\'' +
                ", lastName='" + this.lastName + '\'' +
                '}';
    }
}
