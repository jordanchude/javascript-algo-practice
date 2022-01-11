// PROBLEM STATEMENT
// Given a list of intervals, merge all the overlapping intervals to produce a list that has only mutually exclusive intervals.

// EXAMPLE
// Intervals: [[1,4], [2,5], [7,9]]
// Output: [[1,5], [7,9]]
// Explanation: Since the first two intervals [1,4] and [2,5] overlap, we merged them into 
// one [1,5].

// EXAMPLE
// Intervals: [[6,7], [2,4], [5,9]]
// Output: [[2,4], [5,9]]
// Explanation: Since the intervals [6,7] and [5,9] overlap, we merged them into one [5,9].

// EXAMPLE
// Intervals: [[1,4], [2,6], [3,5]]
// Output: [[1,6]]
// Explanation: Since all the given intervals overlap, we merged them into one.

// USER SUBMISSION
class Interval {
    constructor(start, end) {
      this.start = start;
      this.end = end;
    }
  
    get_interval() {
      return "[" + this.start + ", " + this.end + "]";
    }
  }
  
  
  const merge = function(intervals) {
      // if interval is less than two, 
      // there's only one interval and it can't be merged
    if (intervals.length < 2) {
        return intervals
    }

      // initiate merged final result array
    let merged = []

    // sort intervals
    intervals.sort((a, b) => a[0] - b[0])

    // initiate start and end variables for first interval
    let start = intervals[0].start
    let end = intervals[0].end

    // Loop through intervals
    for (i = 1; i < intervals.length; i++) {

        // inititate variable for current interval
        const interval = intervals[i]

        // if beginning of current interval is less than or equal to end of first interval
        if (interval.start <= end) {
            // end is re-assigned to the biggest end of the current interval or the first interval
            end = Math.max(interval.end, end)

        // else there isn't an overlapping interval
        } else {

            // add first or current interval to list of intervals
            merged.push(new Interval(start, end))

            // re-assign interval start and end to current interval start and end
            start = interval.start;
            end = interval.end
        }
    }

    // add the last interval in the list of intervals
    merged.push(new Interval(start, end));
    return merged;
  };
  
  // TESTS
  merged_intervals = merge([new Interval(1, 4), new Interval(2, 5), new Interval(7, 9)]);
  result = "";
  for(i=0; i < merged_intervals.length; i++) {
    result += merged_intervals[i].get_interval() + " ";
  }
  console.log(`Merged intervals: ${result}`)
  
  
  merged_intervals = merge([new Interval(6, 7), new Interval(2, 4), new Interval(5, 9)]);
  result = "";
  for(i=0; i < merged_intervals.length; i++) {
    result += merged_intervals[i].get_interval() + " ";
  }
  console.log(`Merged intervals: ${result}`)
  
  
  merged_intervals = merge([new Interval(1, 4), new Interval(2, 6), new Interval(3, 5)]);
  result = "";
  for(i=0; i < merged_intervals.length; i++) {
    result += merged_intervals[i].get_interval() + " ";
  }
  console.log(`Merged intervals: ${result}`)
  