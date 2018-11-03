# Generated by Django 2.1.3 on 2018-11-03 10:39

from django.db import migrations, models
import django.db.models.deletion
import listings.models


class Migration(migrations.Migration):

    dependencies = [
        ('listings', '0005_auto_20181102_2132'),
    ]

    operations = [
        migrations.CreateModel(
            name='ListingImage',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to=listings.models.listing_image_directory_path)),
                ('listing', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='images', to='listings.Listing')),
            ],
        ),
    ]
