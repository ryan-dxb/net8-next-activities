using AutoMapper;
using Domain;

namespace Application;

public class MappingProfiles : Profile
{
    public MappingProfiles()
    {

        CreateMap<Activity, Activity>();
        // This is the same as the snippet below
        // CreateMap<Activity, ActivityDto>();
    }

}
