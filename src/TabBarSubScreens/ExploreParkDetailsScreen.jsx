import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

const ExploreParkDetailsScreen = ({ navigation }) => {
  const renderStars = rating => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Icon
          key={i}
          name="star"
          size={19}
          color={i <= rating ? '#B8E0B8' : '#E0E0E0'}
        />,
      );
    }
    return stars;
  };

  const renderReviewBars = () => {
    const reviews = [
      { stars: 5, percentage: 40, count: 88 },
      { stars: 4, percentage: 30, count: 25 },
      { stars: 3, percentage: 15, count: 6 },
      { stars: 2, percentage: 10, count: 4 },
      { stars: 1, percentage: 5, count: 2 },
    ];

    return reviews.map(review => (
      <View key={review.stars} style={styles.reviewBarContainer}>
        <Text style={styles.starNumber}>{review.stars}</Text>
        <View style={styles.progressBarBackground}>
          <View
            style={[styles.progressBar, { width: `${review.percentage}%` }]}
          />
        </View>
        <Text style={styles.reviewPercentage}>{review.percentage}%</Text>
      </View>
    ));
  };
const ReportIssue = () => {
    navigation.navigate('Explore',{
      screen:'ExploreJournalEntryScreen'
    })
  
}
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={26} color="#141414" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Park Details</Text>
        <View style={{ width: 26 }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={styles.content}>
        {/* Main Image */}
        <Image
          source={require('../../assets/images/forest-trail.png')}
          style={styles.mainImage}
        />

        {/* Park Info */}
        <View style={styles.parkSection}>
          <Text style={styles.parkName}>Whispering Pines Trail</Text>
          <Text style={styles.parkDescription}>
            A scenic trail through a dense pine forest, perfect for hiking and
            birdwatching. The trail offers a moderate challenge with some steep
            sections.
          </Text>
        </View>

        {/* Details Section */}
        <View style={styles.detailsSection}>
          <Text style={styles.sectionTitle}>Details</Text>
          <View style={styles.horizontalbar} />
          <View style={styles.detailsContainer}>
            <View style={styles.detailColumn}>
              <Text style={styles.detailLabel}>Facilities</Text>
              <Text style={styles.detailValue}>Restrooms,</Text>
              <Text style={styles.detailValue}>Parking</Text>
            </View>
            <View style={styles.horizontalbar} />
            <View style={styles.detailColumn}>
              <Text style={styles.detailLabel}>Sunrise/Sunset</Text>
              <Text style={styles.detailValue}>6:15 AM /</Text>
              <Text style={styles.detailValue}>7:45 PM</Text>
            </View>
          </View>
        </View>

        {/* Wildlife Viewing Section */}
        <View style={styles.wildlifeSection}>
          <Text style={styles.sectionTitle}>
            Optimal Wildlife Viewing Times
          </Text>
          <Text style={styles.wildlifeDescription}>
            Wildlife activity is generally highest during dawn and dusk.
            Specific species may be more active at different times.
          </Text>
          {/* Wildlife Activity */}
          <View style={styles.wildlifeActivity}>
            <Text style={styles.wildlifeLabel}>Wildlife Activity</Text>
            <Text style={styles.wildlifeLevel}>High</Text>
            <Text style={styles.wildlifeSubtext}>Today +10%</Text>

            <View style={styles.activityChart}>
              <View style={styles.chartBars}>
                <View style={styles.barContainer}>
                  <View style={styles.activityBar}>
                    <View style={[styles.activityFill, { height: '3%' }]} />
                  </View>
                  <Text style={styles.timeLabel}>6 AM</Text>
                </View>
                <View style={styles.barContainer}>
                  <View style={styles.activityBar}>
                    <View style={[styles.activityFill, { height: '3%' }]} />
                  </View>
                  <Text style={styles.timeLabel}>12 PM</Text>
                </View>
                <View style={styles.barContainer}>
                  <View style={styles.activityBar}>
                    <View style={[styles.activityFill, { height: '3%' }]} />
                  </View>
                  <Text style={styles.timeLabel}>6 PM</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Trail Map */}
        <View style={styles.mapSection}>
          <Text style={styles.sectionTitle}>Trail Map</Text>
          <View style={styles.mapContainer}>
            <MapView
              provider={PROVIDER_GOOGLE}
              style={styles.mapView}
              region={{
                latitude: 37.4419,
                longitude: -122.143,
                latitudeDelta: 0.02,
                longitudeDelta: 0.02,
              }}
              mapType="terrain"
            >
              <Marker
                coordinate={{
                  latitude: 37.4419,
                  longitude: -122.143,
                }}
                pinColor="red"
              />
            </MapView>
          </View>
        </View>

        {/* Reviews Section */}
        <View style={styles.reviewsSection}>
          <Text style={styles.sectionTitle}>Reviews</Text>

          {/* Rating Summary */}
          <View style={styles.reviewandrating}>
            {/* Left: Rating Number + Stars */}
            <View style={styles.ratingContainer}>
              <Text style={styles.ratingNumber}>4.5</Text>
              <View style={styles.ratingInfo}>
                <View style={styles.starsContainer}>{renderStars(4)}</View>
                <Text style={styles.reviewCount}>125 reviews</Text>
              </View>
            </View>

            {/* Right: Rating Bars */}
            <View style={styles.ratingBars}>{renderReviewBars()}</View>
          </View>

          {/* Individual Reviews */}
          <View style={styles.individualReviews}>
            {/* Review 1 */}
            <View style={styles.reviewItem}>
              <View style={styles.reviewHeader}>
                <Image
                  source={require('../../assets/images/avatar1.png')}
                  style={styles.reviewerAvatar}
                />
                <View style={styles.reviewerInfo}>
                  <Text style={styles.reviewerName}>Lucas Bennett</Text>
                  <Text style={styles.reviewTime}>2 weeks ago</Text>
                </View>
              </View>
              <View style={styles.reviewStars}>{renderStars(5)}</View>
              <Text style={styles.reviewText}>
                Absolutely stunning trail! The views are breathtaking, and the
                forest is so peaceful. Saw a variety of birds and even a deer.
                Highly recommend!
              </Text>
              <View style={styles.reviewActions}>
                <TouchableOpacity style={styles.reviewAction}>
                  <Icon name="thumb-up-off-alt" size={18} color="#618561" />
                  <Text style={styles.reviewActionText}>15</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.reviewAction}>
                  <Icon name="thumb-down-off-alt" size={18} color="#618561" />
                  <Text style={styles.reviewActionText}>2</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Review 2 */}
            <View style={styles.reviewItem}>
              <View style={styles.reviewHeader}>
                <Image
                  source={require('../../assets/images/avatar2.png')}
                  style={styles.reviewerAvatar}
                />
                <View style={styles.reviewerInfo}>
                  <Text style={styles.reviewerName}>Isabella Carter</Text>
                  <Text style={styles.reviewTime}>1 month ago</Text>
                </View>
              </View>
              <View style={styles.reviewStars}>{renderStars(4)}</View>
              <Text style={styles.reviewText}>
                Enjoyable hike with beautiful scenery. The trail was
                well-maintained, but some parts were quite challenging. Overall,
                a great experience.
              </Text>
              <View style={styles.reviewActions}>
                <TouchableOpacity style={styles.reviewAction}>
                  <Icon name="thumb-up-off-alt" size={18} color="#618561" />
                  <Text style={styles.reviewActionText}>8</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.reviewAction}>
                  <Icon name="thumb-down-off-alt" size={18} color="#618561" />
                  <Text style={styles.reviewActionText}>1</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        {/* Recent Observations */}
        <View style={styles.observationsSection}>
          <Text style={styles.sectionTitle}>Recent Observations</Text>
          <View style={styles.observationsList}>
            <View style={styles.observationItem}>
              <Image
                source={require('../../assets/images/cardinal-observation.png')}
                style={styles.observationImage}
              />
              <View style={styles.observationInfo}>
                <Text style={styles.observationSpecies}>Northern Cardinal</Text>
                <Text style={styles.observationDetails}>
                  Observed by Owen Harper
                </Text>
              </View>
            </View>
            <View style={styles.observationItem}>
              <Image
                source={require('../../assets/images/wildflower-observation.png')}
                style={styles.observationImage}
              />
              <View style={styles.observationInfo}>
                <Text style={styles.observationSpecies}>Wildflower</Text>
                <Text style={styles.observationDetails}>
                  Observed by Chloe Hayes
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Report Issue */}
        <TouchableOpacity style={styles.reportButton} onPress={ReportIssue}>
          <Text style={styles.reportButtonText}>Report Issue</Text>
        </TouchableOpacity>

        <View style={{ height: 10 }} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 15,
    backgroundColor: '#FFFFFF',
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: 'NotoSerif-Bold',
    color: '#121712',
    lineHeight: 23,
  },
  content: {
    flex: 1,
  },
  mainImage: {
    width: '100%',
    height: 320,
    resizeMode: 'cover',
  },
  parkSection: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },
  parkName: {
    fontSize: 22,
    fontFamily: 'NotoSerif-Bold',
    color: '#121712',
    marginBottom: 10,
    lineHeight: 28,
  },
  parkDescription: {
    fontSize: 16,
    fontFamily: 'NotoSerif-Regular',
    color: '#121712',
    lineHeight: 24,
  },
  detailsSection: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'NotoSerif-Bold',
    color: '#121712',
    marginBottom: 15,
    lineHeight: 23,
  },
  horizontalbar: {
    width: '19%',
    height: 1,
    backgroundColor: '#E5E8EB',
    marginBottom: 15,
  },
  detailsContainer: {
    flex: 1,
  },
  detailColumn: {
    flex: 1,
    marginBottom: 15,
  },
  detailLabel: {
    fontSize: 14,
    fontFamily: 'NotoSerif-Regular',
    color: '#618561',
    lineHeight: 21,
  },
  detailValue: {
    fontSize: 14,
    fontFamily: 'NotoSerif-Regular',
    color: '#121712',
    lineHeight: 21,
  },
  wildlifeSection: {
  paddingHorizontal: 20,
  paddingBottom: 20,
},
wildlifeDescription: {
  fontSize: 16,
  fontFamily: 'NotoSerif-Regular',
  color: '#121712',
  lineHeight: 24,
  marginBottom: 15,
},
wildlifeActivity: {
  marginTop: 15,
  marginBottom: 20,
},
wildlifeLabel: {
  fontSize: 16,
  fontFamily: 'NotoSerif-Medium',
  color: '#121712',
  lineHeight: 24,
  marginBottom: 10,
},
wildlifeLevel: {
  fontSize: 32,
  fontFamily: 'NotoSerif-Bold',
  color: '#121712',
  lineHeight: 40,
  marginBottom: 10,
},
wildlifeSubtext: {
  fontSize: 16,
  fontFamily: 'NotoSerif-Medium',
  color: '#088724',
  lineHeight: 24,
},
activityChart: {
  marginTop: 20,
},
chartBars: {
  flexDirection: 'row',
  alignItems: 'flex-end',
  width: '95%',
},
barContainer: {
  alignItems: 'center',
},
activityBar: {
  width: 33,
  height: 137,
  backgroundColor: '#EBF0EB',
  marginBottom: 20,
  marginRight: 23,
  justifyContent: 'flex-start', // so the green bar grows from top
},
activityFill: {
  width: '100%',
  backgroundColor: '#757575',
  borderTopLeftRadius: 2,
  borderTopRightRadius: 2,
},
timeLabel: {
  fontSize: 13,
  fontFamily: 'NotoSerif-Bold',
  color: '#618561',
  lineHeight: 18,
  marginLeft: -20,
},

  mapSection: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  mapContainer: {
    borderRadius: 12,
    overflow: 'hidden',
    marginTop: 10,
  },
  mapView: {
    height: 200,
  },
  reviewsSection: {
    marginTop: 10,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  reviewandrating: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  ratingContainer: {
    marginTop: 10,
    // flexDirection: 'row',
    // alignItems: 'center',
    marginRight: 30, // space between rating block & bars
    // width: 120, // lock width for the left block
  },
  ratingNumber: {
    fontSize: 36,
    fontFamily: 'NotoSerif-Bold',
    color: '#121712',
    marginRight: 10,
    lineHeight: 45,
  },
  ratingInfo: {
    flex: 1,
    // justifyContent: 'center',
    marginTop: 10,
  },

  starsContainer: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  reviewCount: {
    fontSize: 16,
    fontFamily: 'NotoSerif-Regular',
    color: '#121712',
    lineHeight: 24,
  },
  ratingBars: {
    flex: 1, // take remaining space
    justifyContent: 'center',
  },
  reviewBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  starNumber: {
    fontSize: 14,
    fontFamily: 'NotoSerif-Regular',
    color: '#121712',
    width: 15,
  },
  progressBarBackground: {
    flex: 1,
    height: 8,
    backgroundColor: '#D6E0D6',
    borderRadius: 4,
    marginHorizontal: 10,
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#B8E0B8',
    borderRadius: 4,
  },
  reviewPercentage: {
    fontSize: 12,
    fontFamily: 'NotoSerif-Regular',
    color: '#618561',
    width: 30,
    textAlign: 'right',
    lineHeight: 21,
  },
  individualReviews: {
    marginTop: 10,
  },
  reviewItem: {
    marginBottom: 25,
  },
  reviewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  reviewerAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  reviewerInfo: {
    flex: 1,
  },
  reviewerName: {
    fontSize: 16,
    fontFamily: 'NotoSerif-Medium',
    color: '#121712',
    lineHeight: 24,
  },
  reviewTime: {
    fontSize: 14,
    fontFamily: 'NotoSerif-Regular',
    color: '#618561',
    lineHeight: 20,
  },
  reviewStars: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  reviewText: {
    fontSize: 16,
    fontFamily: 'NotoSerif-Regular',
    color: '#121712',
    lineHeight: 24,
    marginBottom: 12,
  },
  reviewActions: {
    flexDirection: 'row',
  },
  reviewAction: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  reviewActionText: {
    fontSize: 16,
    fontFamily: 'NotoSerif-Regular',
    color: '#618561',
    marginLeft: 5,
    lineHeight: 24,
  },
  observationsSection: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  observationsList: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
  },
  observationItem: {
    // flexDirection: 'row',
    // alignItems: 'center',
    marginBottom: 15,
  },
  observationImage: {
    width: 173,
    height: 173,
    borderRadius: 8,
    marginRight: 15,
    marginBottom: 13,
  },
  observationInfo: {
    flex: 1,
  },
  observationSpecies: {
    fontSize: 16,
    fontFamily: 'NotoSerif-Medium',
    color: '#121712',
    lineHeight: 24,
    marginBottom: 4,
  },
  observationDetails: {
    fontSize: 14,
    fontFamily: 'NotoSerif-Regular',
    color: '#618561',
    lineHeight: 20,
  },
  reportButton: {
    paddingVertical: 15,
    paddingHorizontal: 20, // so text has breathing space
    backgroundColor: '#EBF0EB',
    marginBottom: 20,
    borderRadius: 8,
    alignSelf: 'flex-end', // <-- moves it to right
    marginHorizontal: 20,
  },
  reportButtonText: {
    fontSize: 14,
    fontFamily: 'NotoSerif-Bold',
    color: '#121712',
    lineHeight: 21,
  },
});

export default ExploreParkDetailsScreen;
