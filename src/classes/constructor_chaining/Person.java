package classes.constructor_chaining;

public class Person {
    private String firstName;
    private String lastName;


    public Person() {
        this("foo", "bar");
    }

    public Person(String firstName, String lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    @Override
    public String toString() {
        return "Person{" +
                "firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                '}';
    }
}
