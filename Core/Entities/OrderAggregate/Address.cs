namespace Core.Entities.OrderAggregate
{
    public class Address
    {
        public Address()
        {
        }

        public Address(string firstName, string lastName, string street)
        {
            FirstName = firstName;
            LastName = lastName;
            Street = street;
        }

        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Street { get; set; }
    }
}