import JobItem from "./JobItem";

const JobList = ({ job }) => {
  return (
    <div>
      <JobItem job={job} />
    </div>
  );
};
export default JobList;
