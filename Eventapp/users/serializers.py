from rest_framework import serializers
from .models import User

# Serializer for the User model

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'name', 'email', 'password']
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def create(self, validated_data):
        # Extract the password from the validated data
        password = validated_data.pop('password', None)
        # Create a new instance of the User model with the validated data

        instance = self.Meta.model(**validated_data)
        # Set the password for the user instance
        if password is not None:
            instance.set_password(password)
        # Save the user instance

        instance.save()
        # Return the saved user instance

        return instance
