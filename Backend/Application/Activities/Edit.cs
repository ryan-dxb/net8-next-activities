using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application;

public class Edit
{
    public class Command : IRequest<Result<Unit>>
    {
        public Activity Activity { get; set; }
    }

    public class Handler : IRequestHandler<Command, Result<Unit>>
    {
        private readonly DataContext context;
        private readonly IMapper mapper;

        public Handler(DataContext context, IMapper mapper)
        {
            this.context = context;
            this.mapper = mapper;
        }
        public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
        {
            var activity = await context.Activities.FindAsync(request.Activity.Id);

            if (activity == null) return null;
            // activity.Title = request.Activity.Title ?? activity.Title;
            // activity.Description = request.Activity.Description ?? activity.Description;
            // activity.Category = request.Activity.Category ?? activity.Category;
            // activity.City = request.Activity.City ?? activity.City;
            // activity.Venue = request.Activity.Venue ?? activity.Venue;

            mapper.Map(request.Activity, activity);

            var result = await context.SaveChangesAsync() > 0;

            if (!result) return Result<Unit>.Failure("Failed to update activity");

            return Result<Unit>.Success(Unit.Value);
        }
    }
}
