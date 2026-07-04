import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MapPin, Navigation, Clock, Bus, User, Play } from 'lucide-react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/RootNavigator';

type HomeScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
};

export default function HomeScreen({ navigation }: HomeScreenProps) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* Header Title */}
        <View style={styles.header}>
          <View>
            <Text style={styles.dateText}>WEDNESDAY, 2 JULY</Text>
            <Text style={styles.titleText}>Today's Assignment</Text>
          </View>
          <View style={styles.assignedChip}>
            <View style={styles.dotBlue} />
            <Text style={styles.assignedText}>Assigned</Text>
          </View>
        </View>

        {/* Bus Ticket Card */}
        <View style={styles.ticketCard}>
          <View style={styles.ticketRow}>
            <View>
              <Text style={styles.ticketLabel}>BUS NUMBER</Text>
              <Text style={styles.ticketValue}>312</Text>
            </View>
            <Text style={styles.ticketValue}>ANDHERI</Text>
          </View>
          
          <View style={[styles.ticketRow, { marginTop: 16 }]}>
            <View>
              <Text style={styles.ticketLabel}>ROUTE</Text>
              <Text style={styles.ticketValue}>507-C</Text>
            </View>
            
            <View style={styles.routeLineContainer}>
              <View style={styles.routeLine} />
              <Bus size={14} color="#8A9BB3" style={styles.routeBusIcon} />
              <View style={styles.routeLine} />
            </View>

            <View style={{ alignItems: 'flex-end' }}>
              <Text style={styles.ticketLabel}>STOPS</Text>
              <Text style={styles.ticketValue}>24</Text>
            </View>
          </View>
        </View>

        {/* Info Grid */}
        <View style={styles.grid}>
          <View style={styles.gridItem}>
            <View style={styles.gridHeader}>
              <MapPin size={14} color="#64748B" />
              <Text style={styles.gridLabel}>SOURCE</Text>
            </View>
            <Text style={styles.gridValue}>Andheri East</Text>
          </View>

          <View style={styles.gridItem}>
            <View style={styles.gridHeader}>
              <Navigation size={14} color="#64748B" />
              <Text style={styles.gridLabel}>DESTINATION</Text>
            </View>
            <Text style={styles.gridValue}>CST Terminal</Text>
          </View>

          <View style={styles.gridItem}>
            <View style={styles.gridHeader}>
              <Clock size={14} color="#64748B" />
              <Text style={styles.gridLabel}>SHIFT TIME</Text>
            </View>
            <Text style={styles.gridValue}>08:00 - 16:00</Text>
          </View>

          <View style={styles.gridItem}>
            <View style={styles.gridHeader}>
              <Bus size={14} color="#64748B" />
              <Text style={styles.gridLabel}>VEHICLE NO.</Text>
            </View>
            <Text style={styles.gridValue}>MH-12-AB-4391</Text>
          </View>
        </View>

        {/* Driver Info */}
        <View style={styles.card}>
          <View style={styles.driverRow}>
            <View style={styles.avatarPlaceholder}>
              <User size={20} color="#4285F4" />
            </View>
            <View style={styles.driverInfo}>
              <Text style={styles.gridLabel}>DRIVER</Text>
              <Text style={styles.driverName}>Ramesh Patil</Text>
              <Text style={styles.driverId}>ID: DRV-2291</Text>
            </View>
            <View style={styles.onTimeChip}>
              <View style={styles.dotGreen} />
              <Text style={styles.onTimeText}>On Time</Text>
            </View>
          </View>
        </View>

        {/* Expected Start */}
        <View style={styles.card}>
          <View style={styles.expectedRow}>
            <View>
              <Text style={styles.gridLabel}>EXPECTED START</Text>
              <Text style={styles.timeLarge}>08:00 AM</Text>
              <Text style={styles.locationText}>Platform 4, Andheri East Depot</Text>
            </View>
            <View style={styles.clockIconContainer}>
              <Clock size={20} color="#4285F4" />
            </View>
          </View>
        </View>

      </ScrollView>

      {/* Fixed Bottom Action */}
      <View style={styles.bottomContainer}>
        <TouchableOpacity 
          style={styles.startButton}
          onPress={() => navigation.replace('MainTabs')}
        >
          <Play size={20} color="#FFFFFF" fill="#FFFFFF" />
          <Text style={styles.startButtonText}>Start Trip</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F0F8FB',
  },
  scrollContent: {
    padding: 24,
    paddingBottom: 100,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 24,
  },
  dateText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#4285F4',
    marginBottom: 4,
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1A2D40',
  },
  assignedChip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E0EFFF',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  dotBlue: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#4285F4',
    marginRight: 6,
  },
  assignedText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#4285F4',
  },
  ticketCard: {
    backgroundColor: '#1A2D40',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#1A2D40',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 5,
  },
  ticketRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ticketLabel: {
    fontSize: 10,
    color: '#8A9BB3',
    fontWeight: '700',
    letterSpacing: 0.5,
    marginBottom: 4,
  },
  ticketValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  routeLineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 16,
    marginTop: 10,
  },
  routeLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#8A9BB3',
    opacity: 0.3,
  },
  routeBusIcon: {
    marginHorizontal: 8,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  gridItem: {
    backgroundColor: '#FFFFFF',
    width: '47%',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  gridHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  gridLabel: {
    fontSize: 11,
    fontWeight: '700',
    color: '#64748B',
    marginLeft: 6,
    letterSpacing: 0.5,
  },
  gridValue: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1A2D40',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  driverRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarPlaceholder: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#E0EFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  driverInfo: {
    flex: 1,
  },
  driverName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1A2D40',
    marginBottom: 2,
    marginTop: 4,
  },
  driverId: {
    fontSize: 12,
    color: '#94A3B8',
  },
  onTimeChip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ECFDF5',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  dotGreen: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#10B981',
    marginRight: 6,
  },
  onTimeText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#10B981',
  },
  expectedRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  timeLarge: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1A2D40',
    marginTop: 4,
    marginBottom: 4,
  },
  locationText: {
    fontSize: 12,
    color: '#64748B',
  },
  clockIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 16,
    backgroundColor: '#E0EFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 36, // For safe area on iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 10,
  },
  startButton: {
    backgroundColor: '#4285F4',
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 18,
  },
  startButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
  },
});
