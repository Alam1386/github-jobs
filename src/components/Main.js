import React, { useState } from "react";
import JobPagination from "./JobPagination";
import { Container } from "react-bootstrap";
import GetJobs from "./GetJobs";
import JobList from "./JobList";
import { SearchForm } from "./SearchForm";
const Main = () => {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const { jobs, loading, error, hasNextPage } = GetJobs(params, page);
  const handleParamChange = (e) => {
    const param = e.target.name;
    const value = e.target.value;
    setPage(1);
    setParams((prevParam) => {
      return {
        ...prevParam,
        [param]: value,
      };
    });
  };
  return (
    <Container className="mt-4">
      <h1 className="mb-4">GitHub Jobs</h1>
      <SearchForm params={params} onParamChange={handleParamChange} />
      <JobPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
      {loading && <h4>Loading...</h4>}
      {error && <h4>There is an error</h4>}
      {jobs.map((job) => {
        return <JobList key={job.id} job={job} />;
      })}
      <JobPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
    </Container>
  );
};

export default Main;
