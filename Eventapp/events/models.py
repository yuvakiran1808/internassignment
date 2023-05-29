from django.db import models
from users.models import User

#event model to create the events

class Event(models.Model):
    event_name = models.CharField(max_length=255)  # Field to store the event name
    data = models.TextField() # Field to store the event data
    time = models.DateTimeField() # Field to store the event time
    location = models.CharField(max_length=255)  # Field to store the event location
    image = models.ImageField(upload_to='event_images/')  # Field to store the event image
    is_liked = models.BooleanField(default=False) # Field to indicate if the event is liked or not
    user_Id = models.IntegerField() # Field to store the user ID associated with the event

    def __str__(self):
        return self.event_name
    
    def update_user_on_like(self):  # Method to update the "is_liked" field based on the current value
           if self.is_liked:
           
               is_liked = False
           else:
                is_liked =  True
                