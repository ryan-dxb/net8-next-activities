using System.ComponentModel.DataAnnotations;

namespace Domain;

public class Activity
{
    [Key]  // This is the primary key. It is required if the name of the property is not Id or <classname>Id
    public Guid Id { get; set; }
    public string Title { get; set; }
    public DateTime Date { get; set; }
    public string Description { get; set; }
    public string Category { get; set; }
    public string City { get; set; }
    public string Venue { get; set; }

}
